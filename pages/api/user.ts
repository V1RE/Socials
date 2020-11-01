import faunadb from "faunadb";

const secret = process.env.FAUNADB_SECRET;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

export const getUser = async (username: String) => {
  const user: {
    data: { userName: String; firstName: String; lastName: String };
  } = await client.query(q.Get(q.Match(q.Index("username"), username)));

  return user.data;
};

export default async (req, res) => {
  try {
    res.status(200).json(await getUser(req.query["username"]));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
