import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

const USERNAME = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { username } = params;

  if (!USERNAME.test(username)) {
    return { props: {} };
  }

  try {
    const res = await fetch(`https://www.instagram.com/${username}/?__a=1`);
    const resp = await res.json();
    const user = await resp?.graphql?.user;

    return { props: { user } };
  } catch (error) {
    // The Instagram API most likely died
    console.error(error);
    return { props: {} };
  }
}

const Userpage = ({ user }) => {
  useEffect(() => {
    console.log(user);
  });
  return (
    <Layout>
      <img src={user?.profile_pic_url_hd} width="200" height="200" />
      <div>Hi {user?.full_name}!</div>
    </Layout>
  );
};

export default Userpage;
