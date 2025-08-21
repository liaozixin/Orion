# run_frontend.py
import subprocess
import os
import signal
import sys

# 获取脚本当前目录
root_dir = os.path.dirname(os.path.abspath(__file__))

# 切换到 frontend 目录
frontend_dir = os.path.join(root_dir, "frontend")
os.chdir(frontend_dir)

try:
    # 启动 yarn dev 并将 Ctrl+C 信号传递给子进程
    process = subprocess.Popen(["yarn", "dev"])
    
    # 等待子进程完成，同时可以响应 Ctrl+C
    process.wait()
except KeyboardInterrupt:
    print("\nDetected Ctrl+C, exiting...")
    # 发送中断信号给子进程
    process.send_signal(signal.SIGINT)
    sys.exit(0)
except subprocess.CalledProcessError as e:
    print(f"Error: {e}")
