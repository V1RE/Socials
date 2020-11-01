import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { getUser } from "../api/user";

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { username } = params;
  console.log(username);

  try {
    const user = await getUser(username);
    return { props: { user } };
  } catch (error) {
    // The Instagram API most likely died
    console.error(error);
    return { props: { error } };
  }
}

const Userpage = ({ user, error }) => {
  return (
    <Layout>
      <div>Hi {user?.firstName}!</div>
    </Layout>
  );
};

export default Userpage;
