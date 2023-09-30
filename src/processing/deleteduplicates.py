import hashlib
import os

# Specify the path
path = './'

# Get a list of all files
files = os.listdir(path)

# Create an empty set to hold hashes
hashes = set()

# Iterate over the files
for file in files:
    # Create a hash object
    hasher = hashlib.md5()
    
    # Open the file in binary mode
    with open(os.path.join(path, file), 'rb') as image_file:
        # Read and update hash object with the file content
        buf = image_file.read()
        hasher.update(buf)

    # Get the hexadecimal representation of hash
    file_hash = hasher.hexdigest()

    # If this hash is already in the set, it's a duplicate
    if file_hash in hashes:
        # Delete the file
        print(f"Deleting file which is duplicate of")
        os.remove(os.path.join(path, file))
    # Add the hash to the set
    else:
        hashes.add(file_hash)

print("Duplicates have been deleted successfully.")