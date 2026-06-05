from PIL import Image

img = Image.open('Equidux Web.png')
w, h = img.size
# CTA is near the bottom, above the footer.
# Footer is black.
# Let's crop the bottom 2000 pixels.
cta_crop = img.crop((0, h-2000, w, h-500))
cta_crop.save('cta_crop.png')
