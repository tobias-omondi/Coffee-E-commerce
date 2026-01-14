# products table model
from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from database import Base
from datetime import datetime

class product(Base):
  __tablename__ = "products"
  id =Column(Integer, primary_key =True, index = True)
  name = Column (String, index = True)
  image_url = Column(String)
  description = Column (String)
  price = Column(Float) 
  stock_quantity = Column (Integer)
  is_active = Column (Boolean, default = True)
  created_at = Column (DateTime, default = datetime.utcnow)
  updated_at = Column (DateTime, default = datetime.utcnow, onupdate=datetime.utcnow)

