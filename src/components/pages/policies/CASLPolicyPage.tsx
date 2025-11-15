import { useEffect, useState } from "react";

type PolicyBlock = {
  type: "heading" | "paragraph";
  content: string;
};

const parsePolicyText = (raw: string): PolicyBlock[] => {
  const lines = raw.split(/\r?\n/).map((line) => line.trim());
  const blocks: PolicyBlock[] = [];

  lines.forEach((line) => {
    if (!line) {
      return;
    }

    const isHeading = /^[A-Za-z'() ]+$/.test(line) && line.length <= 60;
    blocks.push({
      type: isHeading ? "heading" : "paragraph",
      content: line,
    });
  });

  return blocks;
};

const CASLPolicyPage = () => {
  const [blocks, setBlocks] = useState<PolicyBlock[]>([]);

  useEffect(() => {
    fetch("/documents/casl-policy.txt")
      .then((response) => response.text())
      .then((text) => setBlocks(parsePolicyText(text)))
      .catch(() => {
        setBlocks([
          {
            type: "paragraph",
            content:
              "We were unable to load the CASL policy document at this time. Please refresh the page or contact info@metanovatech.com for the latest copy.",
          },
        ]);
      });
  }, []);

  const pageTitle = blocks.find((block) => block.type === "heading")?.content ?? "Canada's Anti-Spam Legislation (CASL)";

  return (
    <section className="td-about-area td-about-main-spacing pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-40">
              <span className="td-section-subtitle mb-15 d-inline-block">//  Metanova Tech</span>
              <h1 className="td-section-page-title">{pageTitle}</h1>
              <p className="mt-20">
                Our Anti-Spam Policy explains how Metanova Tech complies with Canada’s Anti-Spam Legislation (CASL) for all outbound
                commercial electronic messages.
              </p>
            </div>
            <div className="policy-content">
              {blocks.map((block, index) => {
                if (block.type === "heading") {
                  // Skip the first heading because it is already used as the hero title
                  if (index === 0) {
                    return null;
                  }
                  return (
                    <h2 key={`${block.content}-${index}`} className="mt-40">
                      {block.content}
                    </h2>
                  );
                }

                return <p key={`${block.content}-${index}`}>{block.content}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CASLPolicyPage;


