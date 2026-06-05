from PIL import Image

try:
    img = Image.open('Equidux Web.png')
    w, h = img.size
    # Crop the bottom 1500 pixels to make it easier to view
    footer_crop = img.crop((0, h-1500, w, h))
    footer_crop.save('footer_crop.png')
    print("Successfully created footer_crop.png")
except Exception as e:
    print(f"Error: {e}")
