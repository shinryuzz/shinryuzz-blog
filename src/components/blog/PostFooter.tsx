import React from "react";
import { TWITTER_ID } from "@/const/constants";
import { personalTwitter } from "@/const/links";

import {
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  HatenaIcon,
  HatenaShareButton,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";
import { useRouter } from "next/router";
import PersonalIcon from "../atom/PersonalIcon";
import Link from "next/link";

type Props = {
  title: string;
};

const PostFooter = ({ title }: Props) => {
  const router = useRouter();
  const currentURL = process.env.NEXT_PUBLIC_BASE_URL + router.asPath;
  const iconSize = 32;

  return (
    <div className="flex flex-col gap-10 mt-20">
      <div className="flex items-center justify-end gap-3">
        <TwitterShareButton url={currentURL} title={title}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>
        <FacebookShareButton url={currentURL} title={title}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>
        <LineShareButton url={currentURL} title={title}>
          <LineIcon size={iconSize} round />
        </LineShareButton>
        <HatenaShareButton url={currentURL} title={title}>
          <HatenaIcon size={iconSize} round />
        </HatenaShareButton>
      </div>

      <div className="flex flex-wrap gap-5 items-center">
        <PersonalIcon isShadow={false} size={90} />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg">
            しんりゅう &nbsp; (
            <a
              href={personalTwitter}
              target="_blank"
              className="text-cyan-800 hover:opacity-70"
            >
              {TWITTER_ID}
            </a>
            )
          </p>
          <p>Thank you for reading ;)</p>
          <Link href="/about" className="text-cyan-800 hover:opacity-70">
            more about me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;