DATA SEGMENT
A DB 2AH
B DB 13H
C DW ?
DATA ENDS
CODE SEGMENT
ASSUME CS:CODE,DS:DATA
START:
MOV AX,DATA
MOV DS,AX
MOV AL,A
MOV BL,B
SUB AL,BL
MOV C,AX
INT 3A
CODE ENDS
END START