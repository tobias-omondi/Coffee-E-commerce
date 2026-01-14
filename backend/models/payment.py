# payment table model
from sqlalchemy import Column, String, Integer, Float, DateTime
from database import Base
from datetime import datetime

class Payment (Base):
  __tablename__ = "payments"
  id = Column (Integer, primary_key = True, index = True)
  order_id = Column (Integer, index = True)
  payment_method = Column (String)
  amount = Column (Float)
  status = Column (String, default = "pending")
  transaction_id = Column (String, unique =True, Index = True)
  created_at = Column (DateTime, default = datetime.utcnow)