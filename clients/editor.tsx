/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  BlockManager,
  BasicType,
  AdvancedType,
  JsonToMjml,
} from "easy-email-core";
import {
  BlockAvatarWrapper,
  EmailEditor,
  EmailEditorProvider,
  IEmailTemplate,
} from "easy-email-editor";

import { ExtensionProps, StandardLayout } from "easy-email-extensions";
import { useWindowSize } from "react-use";
import {
  Button,
  ConfigProvider,
  Dropdown,
  Form,
  Input,
  Menu,
  Message,
  Modal,
  PageHeader,
  Select,
  Space,
  Spin,
} from "@arco-design/web-react";
import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";
import ModalHtml from "@/components/ModalHtml";

// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import "@arco-themes/react-easy-email-theme/css/arco.css";
import axios from "axios";
import { Config } from "final-form";
import { data } from "autoprefixer";

const defaultCategories: ExtensionProps["categories"] = [
  {
    label: "Content",
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: "0px 0px 0px 0px" } },
      },
      {
        type: AdvancedType.BUTTON,
      },
      {
        type: AdvancedType.SOCIAL,
      },
      {
        type: AdvancedType.DIVIDER,
      },
      {
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
      },
    ],
  },
  {
    label: "Layout",
    active: true,
    displayType: "column",
    blocks: [
      {
        title: "2 columns",
        payload: [
          ["50%", "50%"],
          ["33%", "67%"],
          ["67%", "33%"],
          ["25%", "75%"],
          ["75%", "25%"],
        ],
      },
      {
        title: "3 columns",
        payload: [
          ["33.33%", "33.33%", "33.33%"],
          ["25%", "25%", "50%"],
          ["50%", "25%", "25%"],
        ],
      },
      {
        title: "4 columns",
        payload: [["25%", "25%", "25%", "25%"]],
      },
    ],
  },
];

export default function App() {
  const [template, setTemplate] = useState<IEmailTemplate | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const { width } = useWindowSize();

  const smallScene = width < 1400;

  useEffect(() => {
    axios.get("/api/template").then(({ data }) => {
      setTemplate(data);
    });
  }, []);

  const onSubmit: Config<IEmailTemplate>["onSubmit"] = async (values) => {
    // console.log(values, "*****values");
    // const appId = "2b64851b-1e9d-4df9-ba9f-4679291bf059";
    // const publicKey = "18ad3d82-a666-44c7-a345-f32ef7e84b13";
    // const secretKey = "af7b3a7f-190e-4059-b1b6-995211def55d";

    // const res = await axios.post(
    //   "https://api.mjml.io/v1/render",
    //   { mjml: JSON.stringify(values) },
    //   {
    //     headers: {
    //       Authorization: `Basic ${Buffer.from(`${appId}:${publicKey}`).toString(
    //         "base64"
    //       )}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    console.log(values, "*****values");
    const xml = JsonToMjml({
      data: values.content,
      mode: "production",
    });

    console.log(xml, "xml");

    // console.log(html, "res***********");
    setIsOpen(true);
    axios.post("/api/mjmlToHtml", { html: xml }).then(({ data }) => {
      setCode(data);
    });
  };

  if (!template) return <Spin />;

  return (
    <>
      <EmailEditorProvider
        data={template}
        height={"calc(100vh - 70px)"}
        autoComplete
        dashed={false}
        onSubmit={onSubmit}
      >
        {({ values }, { submit, restart }) => (
          <>
            <PageHeader
              style={{ background: "var(--color-bg-2)" }}
              title="Edit"
              className={"debug1"}
              extra={
                <div className="flex flex-row gap-5 ">
                  <Space>
                    <Button type="primary" onClick={submit}>
                      Render HTML
                    </Button>
                  </Space>
                </div>
              }
            />
            <StandardLayout
              compact={!smallScene}
              showSourceCode={true}
              categories={defaultCategories}
            >
              <EmailEditor />
            </StandardLayout>
          </>
        )}
      </EmailEditorProvider>
      {isOpen && (
        <ModalHtml
          isOpen={isOpen}
          data={code}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
