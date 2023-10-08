# perform Addition, multiplication for vactors and matrics.

# for vectors:

def vector_addition(vector1, vector2):
    if len(vector1)!=len(vector2):
        return None
    return [vector1[i]+vector2[i]]
        

