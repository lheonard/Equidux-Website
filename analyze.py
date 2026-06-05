from PIL import Image
import sys

img = Image.open('Equidux Web.png')
# The image is 1440x... Let's crop the features section.
# Hero is roughly top 800px. Features is below it.
box = (0, 800, 1440, 2000)
cropped = img.crop(box)
cropped.save('features_cropped.png')
