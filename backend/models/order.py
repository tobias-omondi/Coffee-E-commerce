# order table model
from sqlachemy import Column, String, Integer, Float, DateTime
from database import Base
from datetime import datetime

class order (Base):
  __tablename__ = "orders"
  id = Column (Integer, primary_key = True, index = True)
  user_id = Column (Integer, index = True)
  product_id = Column(Integer, index = True)
  guest_email = Column (String, index = True)
  status = Column (String, default = "pending")
  total_amount = Column (Float)
  payment_status = Column (String, default = "unpaid")
  created_at = Column (DateTime, default = datetime.utcnow)


class OrderItem (Base):
  __tablename__ = "order_items"
  id = Column (Integer, primary_key = True, index = True)
  order_id = Column(Integer, index =True)
  product_id = Column(Integer, index = True)
  quantity = Column (Integer)
  unit_price = Column (Float)