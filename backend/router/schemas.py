from pydantic import BaseModel
from typing import List


class ProductRequestSchema(BaseModel):
    category: str
    name: str
    location: str
    time: str
    store_avatar: str
    image: str
    price: int
    currency: str
    company: str
    hour: str
    MoreInfo: str


class ProductResponseSchema(ProductRequestSchema):
    id: int

    class Config:
        orm_mode = True


class ProductResponseWith(ProductRequestSchema):
    id: int

    class Config:
        orm_mode = True


# -------------------------------------------
class ReserveRequestSchema(BaseModel):
    name: str
    phone: str
    email: str
    county: str
    addr: str
    area: str
    # time: str
    reserve_date: str
    product_id: str


class ReserveResponseSchema(ReserveRequestSchema):
    id: int
    product_id: int
    # clicked_likes: CardResponseSchema

    class Config:
        orm_mode = True


class ReserveResponseWithProductSchema(ReserveRequestSchema):
    id: int
    product_id: int
    owner_product: ProductResponseSchema

    class Config:
        orm_mode = True


# -------------------------------------------
class CommentRequestSchema(BaseModel):
    typename: str
    name: str
    email: str
    comment: str


class CommentResponseSchema(CommentRequestSchema):
    id: int

    class Config:
        orm_mode = True


# class ProductResponseWithReserveSchema(ProductRequestSchema):
#     id: int
#     buyer: List[ReserveResponseSchema] = []

#     class Config:
#         orm_mode = True
