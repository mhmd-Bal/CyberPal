from app.crud.base import CrudBase
from app.models.flag import Flag
from app.schemas.flag import FlagCreate, FlagUpdate
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from typing import List

class CrudFlag(CrudBase[Flag, FlagCreate, FlagUpdate]):
    def createWithToolId(self, db: Session, *, obj_in: FlagCreate, tool_id: int) -> Flag:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data, tool_id=tool_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj



flag = CrudFlag(Flag)