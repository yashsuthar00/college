DATA SEGMENT
NO1 dw 4567H
NO2 dw 1652H
resl dw ?
resh dw ?
DATA ENDS

ASSUME DS: DATA, CS: CODE
CODE SEGMENT

START:
MOV AX, DATA
MOV DS, AX
MOV AX, NO1
MOV BX, NO2
ADD AX, BX
MOV resl, AX
MOV resh, 0000H
JNC SKIP
MOV resh, 0001H
SKIP: INT 03H
CODE ENDS
END START
