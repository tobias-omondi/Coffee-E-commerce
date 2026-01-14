from .user import Base
from .product import Base 
from .payment import Base
from .order import Base 

# Or if you have multiple Base objects, just create one unified:
from sqlalchemy.orm import declarative_base

Base = declarative_base()
# then import models to register them with Base
from . import user, product, order, payment
