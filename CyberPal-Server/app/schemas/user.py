from pydantic import BaseModel, EmailStr
from typing import List, Optional
from app.schemas import UserType, OpenvpnFile, Script, FavoriteScript


class UserBase(BaseModel):
    username: str
    email: EmailStr | None = None
    is_active: bool | None = True
    user_type_id: int = 1

class UserCreate(UserBase):
    email: EmailStr
    password: str

class UserUpdate(UserBase):
    password: str| None = None

class UserInDBBase(UserBase):
    id: int | None = None

    class Config:
        orm_mode = True

class User(UserInDBBase):
    user_type: Optional[UserType]
    uploaded_file: Optional[OpenvpnFile]
    scripts: Optional[List[Script]]
    favorited_scripts: Optional[List[FavoriteScript]]

class UserInDB(UserInDBBase):
    hashed_password: str