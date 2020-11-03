import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { getUser } from "../api/user";
import Card from "../../components/Card";
import ProfileImg from "../../components/ProfileImg";
import { useRouter } from "next/router";
import { FiInstagram } from "react-icons/fi";
import { Icon } from "@chakra-ui/core";

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { username } = params;

  try {
    const user = await getUser(username);
    return { props: { user }, revalidate: 1 };
  } catch (error) {
    console.error(error);
    return { props: { error: error.message }, revalidate: 1 };
  }
}

const Userpage = ({ user, error }) => {
  const router = useRouter();

  if (error) {
    return (
      <Layout>
        <div>An error ocurred: {error}</div>
      </Layout>
    );
  }

  if (router.isFallback) {
    return (
      <Layout>
        <Card>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col flex-wrap items-center text-center sm:space-x-4 space-y-4 sm:space-y-0 sm:flex-row sm:text-left">
              <ProfileImg />
              <div className="flex-1 animate-pulse">
                <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
            <hr />
          </div>
        </Card>
      </Layout>
    );
  }

  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <Layout>
      <Card>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col flex-wrap items-center text-center sm:space-x-4 space-y-4 sm:space-y-0 sm:flex-row sm:text-left">
            <ProfileImg src={user?.image} name={fullName} />
            <div className="flex-1">
              <h1 className="text-2xl">{fullName}</h1>
            </div>
          </div>
          <hr />
          <ul className="flex flex-wrap justify-start gap-5">
            {user?.items.map((item) => (
              <li key={item?.title}>
                <a href={item?.url}>
                  <Icon as={FiInstagram} boxSize={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Layout>
  );
};

export default Userpage;
