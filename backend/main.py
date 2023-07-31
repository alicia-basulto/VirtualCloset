import extcolors
import webcolors

def closest_colour(requested_colour):
    min_colours = {}
    for key, name in webcolors.CSS3_HEX_TO_NAMES.items():
        r_c, g_c, b_c = webcolors.hex_to_rgb(key)
        rd = (r_c - requested_colour[0]) ** 2
        gd = (g_c - requested_colour[1]) ** 2
        bd = (b_c - requested_colour[2]) ** 2
        min_colours[(rd + gd + bd)] = name
    return min_colours[min(min_colours.keys())]

def get_colour_name(requested_colour):
    try:
        closest_name = actual_name = webcolors.rgb_to_name(requested_colour)
    except ValueError:
        closest_name = closest_colour(requested_colour)
        actual_name = None
    return actual_name, closest_name

colors, pixel_count = extcolors.extract_from_path("C:\\Tech\VirtualCloset\\backend\\ali.jpg")

# Calcula el porcentaje de cada color y muestra el nombre del color y el porcentaje
total_pixels = sum(pixel_count for _, pixel_count in colors)
for color, pixel_count in colors:
    porcentaje = (pixel_count / total_pixels) * 100
    actual_name, closest_name = get_colour_name(color)
    print(f"{porcentaje:.2f}%, {closest_name}")
