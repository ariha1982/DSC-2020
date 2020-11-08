#소켓 모듈을 통한 네트워크 연결
import socket
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org',80)) #소켓에 data.pr4e.org라는 호스트에 80이라는 포트에 연결

#간단한 웹브라우저 만들기
import socket

mysocket=socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    data=mysock.recv(512)
    if (len(data)<1):
        break
    print(data.decode(),end='')
mysock.close()
