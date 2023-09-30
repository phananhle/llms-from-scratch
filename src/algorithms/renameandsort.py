import os
import glob

# define the path 
path = './'

# get the files
files = sorted(glob.glob(os.path.join(path, "ezgif-frame-*.jpg")))

# loop over the files
for i, file in enumerate(files, 201):   # starts enumerator from 201
    # define the new name
    new_name = os.path.join(path, f'{i}.jpg')
    
    # rename the file
    os.rename(file, new_name)

print("Files renamed successfully.")