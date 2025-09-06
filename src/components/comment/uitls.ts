export interface TComment {
  id: string;
  contentRich: string;
  createdAt: Date;
  discussionId: string;
  isEdited: boolean;
  userId: string;
}
export interface TDiscussion {
  id: string;
  comments: TComment[];
  createdAt: Date;
  isResolved: boolean;
  userId: string;
  documentContent?: string;
}

export const discussionsData: TDiscussion[] = [
  {
    id: "discussion1",
    comments: [
      {
        id: "comment1",
        contentRich:
          "Comments are a great way to provide feedback and discuss changes.",
        createdAt: new Date(Date.now() - 600_000),
        discussionId: "discussion1",
        isEdited: false,
        userId: "Charlie",
      },
      {
        id: "comment2",
        contentRich:
          "Agreed! The link to the docs makes it easy to learn more.",
        createdAt: new Date(Date.now() - 500_000),
        discussionId: "discussion1",
        isEdited: false,
        userId: "Bob",
      },
    ],
    createdAt: new Date(),
    documentContent: "comments",
    isResolved: false,
    userId: "Charlie",
  },
  {
    id: "discussion2",
    comments: [
      {
        id: "comment1",
        contentRich:
          "Nice demonstration of overlapping annotations with both comments and suggestions!",
        createdAt: new Date(Date.now() - 300_000),
        discussionId: "discussion2",
        isEdited: false,
        userId: "Bob",
      },
      {
        id: "comment2",
        contentRich:
          "This helps users understand how powerful the editor can be.",
        createdAt: new Date(Date.now() - 200_000),
        discussionId: "discussion2",
        isEdited: false,
        userId: "Charlie",
      },
    ],
    createdAt: new Date(),
    documentContent: "overlapping",
    isResolved: false,
    userId: "Bob",
  },
];
