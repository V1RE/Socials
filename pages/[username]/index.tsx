import React, { useEffect } from "react";
import Layout from "../../components/Layout";

const USERNAME = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { username } = params;
  console.log(username);

  if (!USERNAME.test(username)) {
    console.log("username doesnt regex");
    return { props: {} };
  }

  try {
    const res = await fetch(`https://www.instagram.com/${username}/?__a=1`);
    const resp = await res.json();
    const user = await resp?.graphql?.user;

    console.log(user);

    return { props: { user } };
  } catch (error) {
    // The Instagram API most likely died
    console.error(error);
    return { props: { error } };
  }
}

const Userpage = ({ user, error }) => {
  useEffect(() => {
    console.log(user);
    console.error(error);
  });
  return (
    <Layout>
      <img src={user?.profile_pic_url_hd} width="200" height="200" />
      <div>
        Hi
        {user?.full_name}!
      </div>
    </Layout>
  );
};

export default Userpage;
