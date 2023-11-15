import { NextApiResponse, NextApiRequest } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    subject: "template 1",
    content: {
      type: "page",
      data: {
        value: {
          breakpoint: "480px",
          headAttributes: "",
          "font-size": "15px",
          "line-height": "1.8",
          headStyles: [],
          fonts: [],
          responsive: true,
          "font-family": "'Lato', sans-serif",
          "text-color": "#000000",
          "content-background-color": "#fafafa",
        },
      },
      attributes: {
        "background-color": "#efeeea",
        width: "600px",
      },
      children: [
        {
          type: "advanced_wrapper",
          data: {
            value: {},
          },
          attributes: {
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            "background-url": "",
            "background-color": "#E12826",
          },
          children: [
            {
              type: "advanced_image",
              data: {
                value: {},
              },
              attributes: {
                align: "center",
                padding: "50px 50px 50px 50px",
                src: "/inline/logo-reverse-rgb1.png",
                width: "250px",
                "container-background-color": "#E12826",
              },
              children: [],
            },
          ],
        },
        {
          type: "advanced_wrapper",
          data: {
            value: {},
          },
          attributes: {
            padding: "20px 50px 20px 50px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            "background-color": "#00A887",
          },
          children: [
            {
              type: "advanced_section",
              data: {
                value: {
                  noWrap: false,
                },
              },
              attributes: {
                padding: "20px 0px 20px 0px",
                "background-repeat": "repeat",
                "background-size": "auto",
                "background-position": "top center",
                border: "none",
                direction: "ltr",
                "text-align": "center",
                "background-color": "#00A887",
              },
              children: [
                {
                  type: "advanced_column",
                  attributes: {
                    width: "50%",
                    padding: "0px 0px 0px 0px",
                  },
                  data: {
                    value: {},
                  },
                  children: [
                    {
                      type: "advanced_image",
                      data: {
                        value: {},
                      },
                      attributes: {
                        align: "left",
                        height: "auto",
                        padding: "0px 0px 0px 0px",
                        src: "/inline/IP-SafeTFresh-Rectangle-whitetext1.png",
                        width: "200px",
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: "advanced_column",
                  data: {
                    value: {},
                  },
                  attributes: {
                    padding: "0px 0px 0px 0px",
                    border: "none",
                    "vertical-align": "top",
                  },
                  children: [
                    {
                      type: "advanced_text",
                      data: {
                        value: {
                          content: "SKU 34856",
                        },
                      },
                      attributes: {
                        padding: "10px 25px 10px 25px",
                        align: "right",
                        color: "#FFFFFF",
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "advanced_image",
              data: {
                value: {},
              },
              attributes: {
                align: "center",
                height: "auto",
                padding: "0px 0px 0px 0px",
                src: "/inline/Safe-T-Fresh-Technology_1494x1214_acf_cropped-1-1024x832-11.png",
              },
              children: [],
            },
          ],
        },
        {
          type: "advanced_wrapper",
          data: {
            value: {},
          },
          attributes: {
            padding: "0px 0px 0px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
          },
          children: [
            {
              type: "advanced_image",
              data: {
                value: {},
              },
              attributes: {
                align: "center",
                height: "auto",
                padding: "0px 0px 0px 0px",
                src: "/inline/FullWidthImage.png",
              },
              children: [],
            },
          ],
        },
      ],
    },
  });
};

export default handler;
