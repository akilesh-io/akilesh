// Notion is only used by the contact form (pages/api/notion.ts -> formUpload).
// The blog helpers that used to live here moved to
// _archive/blog/lib/notion-blog.ts when the Notion-backed blog was archived;
// they are kept there for reference and are not built or called.
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const formNotion = new Client({ auth: process.env.FORM_NOTION_KEY });

export const formUpload = async (formData) => {

    formData.services.map((service) => {
        console.log(service);
    });

    const response = await formNotion.pages.create({
        "icon": {
            "type": "emoji",
            "emoji": "📝"
        },
        "parent": {
            "type": "database_id",
            "database_id": "5dbf3dbb45494106b98903eb4fc8f18f"
        },
        "properties": {
            "Name": {
                "title": [
                    {
                        "type": "text",
                        "text": {
                            "content": `${formData.firstName} ${formData.lastName}`
                        }
                    },
                ],
            },
            "Email": {
                "email": formData.email
            },
            "Budget": {
                "number": Number(formData.budget)
            },
            "Attachments": {
                "url": formData.fileUrl
            },
            "Service": {
                "multi_select": formData.services.map((service) => ({ name: service.name, id: service.id }))
            },
            "Source": {
                "select": {
                    "name": "form"
                }
            },
            "Status": {
                "select": {
                    "name": "Lead"
                }
            }
        },
        "children": [
            {
                "object": "block",
                "type": "heading_2",
                "heading_2": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": "Project Details"
                            }
                        }
                    ]
                }
            },
            {
                "object": "block",
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": formData.message
                            }
                        }
                    ]
                }
            }
        ]
    });

    return response;
};


export default notion;