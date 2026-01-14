# user table model
from sqlalchemy import Column, Integer, String, Boolean, DateTime
from database import Base  # wherever your Base is
from datetime import datetime


class User(Base):
  __tablename__ = "users"
  id = Column (Integer, primary_key=True, index =True)
  email = Column(String, unique = True, index = True )
  hashed_password = Column(String (255) )
  FullName = Column(String)
  Phone_Number = Column(Integer)
  is_verified = Column(Boolean, default =0)
  created_at = Column (DateTime, default=datetime.utcnow)
  updated_at = Column (DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)