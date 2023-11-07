"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    pass


def index() -> rx.Component:
    return rx.fragment(
        rx.color_mode_button(rx.color_mode_icon(), float="right"),
        rx.vstack(
            rx.heading("LexoCraft", font_size="2em"),
            rx.text("LexoCraft is a description and sales optimization tool designed to help e-commerce sellers optimize their product descriptions and choice of images to maximize online sales."),
            rx.button_group(
                rx.link(
                    rx.button(
                        "Analyze text", bg="lightblue", color="black", size="md"
                    ),
                    href = "https://truong-2023-ffs69wyet42bgdxawcxw5b.streamlit.app/",
                    button=True,
                ),
                rx.link(
                    rx.button(
                        "Analyze EV/VU values", bg="lightblue", color="black", size="md"
                    ),
                    href = "https://truong-2023-ffs69wyet42bgdxawcxw5b.streamlit.app/",
                    button=True,
                )
            ),
            spacing="1.5em",
            font_size="2em",
            padding_top="10%",
        ),
    )


# Add state and page to the app.
app = rx.App()
app.add_page(index)
app.compile()
