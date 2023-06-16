import os
import re

def get_title_from_file(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
        match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
        if match:
            return match.group(1)
    return None

def rename_folders_with_title(folder_path):
    for folder_name in os.listdir(folder_path):
        folder_dir = os.path.join(folder_path, folder_name)
        if os.path.isdir(folder_dir) and folder_name != 'first_project':
            index_file = os.path.join(folder_dir, 'index.html')
            if os.path.isfile(index_file):
                title = get_title_from_file(index_file)
                if title:
                    titleParts = title.split(' ')
                    new_folder_name = titleParts[0]+titleParts[1]+'-'+'_'.join(titleParts[3:])
                    new_folder_dir = os.path.join(folder_path, new_folder_name)
                    os.rename(folder_dir, new_folder_dir)
                    print(f'Renamed folder "{folder_name}" to "{new_folder_name}".')

# Specify the path to the main folder containing the subfolders
main_folder_path = './'

rename_folders_with_title(main_folder_path)