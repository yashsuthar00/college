DATA SEGMENT
A DB 28H
B DB 02H
C DW ?
DATA ENDS
CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
MOV AX,DATA
MOV DS,AX
MOV AX,0000H
MOV BX,0000H
MOV AL,A
MOV BL,B
DIV B
MOV C,AX
INT 3
CODE ENDS