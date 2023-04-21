from typing import TypeVar, Generic, Type, Any, Optional, List
from pydantic import BaseModel
from app.database.database import Base
from sqlalchemy.orm import Session

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)

class CrudBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    def get(self, db: Session, id: Any) -> Optional[ModelType]:
        return db.query(self.model).filter(self.model.id == id).first()
    
    def get_multiple(self, db: Session, offset: int = 0, limit: int = 100) -> Optional[List[ModelType]]:
        return db.query(self.model).offset(offset).limit(limit).all()