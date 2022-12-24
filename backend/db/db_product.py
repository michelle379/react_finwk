from fastapi import HTTPException, status
from router.schemas import ProductRequestSchema
from sqlalchemy import func
from sqlalchemy.orm.session import Session
from .products_feed import products

from db.models import DbProduct

def db_feed(db: Session):
    new_product_list = [DbProduct(
        category=product["category"],
        name=product["name"],
        location=product["location"],
        time=product["time"],
        store_avatar=product["store_avatar"],
        image=product["image"],
        price=product["price"],
        currency=product["currency"],
        company=product["company"],
        hour=product["hour"],
        MoreInfo=product["MoreInfo"],

    ) for product in products]
    db.query(DbProduct).delete()
    db.commit()
    db.add_all(new_product_list)
    db.commit()
    return db.query(DbProduct).all()

def create(db: Session, request: ProductRequestSchema) -> DbProduct:
    new_product = DbProduct(
        category=request.category,
        name=request.name,
        location=request.location,
        time=request.time,
        store_avatar=request.store_avatar,
        image=request.image,
        price=request.price,
        currency=request.currency,
        company=request.company,
        hour=request.hour,
        MoreInfo=request.MoreInfo,
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product


def get_all(db: Session) -> list[DbProduct]:
    return db.query(DbProduct).all()


def get_product_by_id(product_id: int, db: Session):
    product = db.query(DbProduct).filter(DbProduct.id == product_id).first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'Product with id = {id} not found')
    return product


def get_product_by_category(category: str, db: Session) -> list[DbProduct]:
    product = db.query(DbProduct).filter(func.upper(DbProduct.category) == category.upper()).all()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'Product with category = {category} not found')
    return product