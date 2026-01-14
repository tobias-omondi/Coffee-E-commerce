# creating database file and session
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base

DATABASE_URL = "sqlite+aiosqlite:///./test.db"

engine = create_async_engine(DATABASE_URL, echo = True)

AsyncSessionLocal = async_sessionmaker(
 bind = engine,
 autoflush = False,
 autocommit = False,
 expire_on_commit = False)

Base =  declarative_base()

async def get_db() -> AsyncSession:
    """Dependency to get a database session."""
    async with AsyncSessionLocal() as session:
        yield session