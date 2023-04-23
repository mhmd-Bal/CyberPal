from fastapi import APIRouter
from app.api.api_v1.routers import users, tools, scripts, schedules, openvpn_files, login

api_router = APIRouter()

api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(tools.router, prefix="/tools", tags=["tools"])
api_router.include_router(scripts.router, prefix="/scripts", tags=["scripts"])
api_router.include_router(schedules.router, prefix="/schedules", tags=["schedules"])
api_router.include_router(openvpn_files.router, prefix="/openvpn_files", tags=["openvpn_files"])
api_router.include_router(login.router, prefix="/login", tags=["login"])