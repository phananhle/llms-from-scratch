import os
import glob

path = './'

files = sorted(glob.glob(os.path.join(path, "ezgif-frame-*.jpg")))

for i, file in enumerate(files, 201):   
    new_name = os.path.join(path, f'{i}.jpg')
    
    os.rename(file, new_name)

print("Files renamed successfully.")