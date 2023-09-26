export class Message {
  _id: string;
  body: string;
  createdAt: string;
  author: {
    _id: string,
    profile: {
      firstName: string,
      lastName: string
    }
  };
}
