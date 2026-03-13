import { useState } from "react";

const colors = {
  bg: "#0A0A14",
  bgCard: "#10101E",
  bgHover: "#14142A",
  steel: "#4A7FA5",
  steelLight: "#6A9FC5",
  gold: "#C9A84C",
  goldDim: "#8A6E30",
  text: "#E8E4DC",
  textMuted: "#8A8898",
  border: "#1E1E30",
};

const Section = ({ title, color, children }) => (
  <div
    style={{
      borderLeft: `2px solid ${color}`,
      paddingLeft: "1.25rem",
      marginBottom: "1.75rem",
    }}
  >
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.65rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: color,
        marginBottom: "0.75rem",
      }}
    >
      {title}
    </div>
    {children}
  </div>
);

const Condition = ({ label, items, accent }) => (
  <div style={{ marginBottom: "1.25rem" }}>
    <div
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1rem",
        color: accent,
        marginBottom: "0.5rem",
        fontStyle: "italic",
      }}
    >
      {label}
    </div>
    {items.map((item, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          gap: "0.75rem",
          marginBottom: "0.4rem",
          alignItems: "flex-start",
        }}
      >
        <span style={{ color: accent, marginTop: "0.1rem", fontSize: "0.7rem" }}>
          ◆
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.875rem",
            color: colors.text,
            lineHeight: "1.5",
          }}
        >
          {item}
        </span>
      </div>
    ))}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("framework");

  const tabs = [
    { id: "framework", label: "Framework" },
    { id: "tests", label: "Tests" },
    { id: "rationale", label: "Rationale" },
    { id: "usage", label: "Usage" },
  ];

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        minHeight: "100vh",
        padding: "2.5rem 1.5rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: colors.goldDim,
              marginBottom: "0.5rem",
            }}
          >
            ECOS · Prompt Engineering Principle
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              color: colors.text,
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Qualitative Stop Conditions
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: colors.textMuted,
              marginTop: "0.5rem",
              marginBottom: 0,
            }}
          >
            Replace numerical targets with material exhaustion tests
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0",
            borderBottom: `1px solid ${colors.border}`,
            marginBottom: "2rem",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom:
                  activeTab === tab.id
                    ? `2px solid ${colors.gold}`
                    : "2px solid transparent",
                padding: "0.5rem 1.25rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                color:
                  activeTab === tab.id ? colors.gold : colors.textMuted,
                cursor: "pointer",
                marginBottom: "-1px",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Framework Tab */}
        {activeTab === "framework" && (
          <div>
            <Section title="The Principle" color={colors.gold}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem",
                  color: colors.text,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Never tell an AI how many items to produce. Instead, define the
                conditions under which extraction is complete and the
                conditions under which it should stop. Let material quality
                determine quantity — not a count.
              </p>
            </Section>

            <Section title="Keep Extracting Until" color={colors.steel}>
              <Condition
                accent={colors.steelLight}
                label="Exhaustion condition"
                items={[
                  "Each pass has been fully reviewed and no new category yields an additional item.",
                  "Remaining candidates fail the standalone test.",
                  "Remaining candidates fail the generalization test.",
                ]}
              />
            </Section>

            <Section title="Stop Before" color={colors.goldDim}>
              <Condition
                accent={colors.textMuted}
                label="Distortion conditions"
                items={[
                  "Capturing nuance that only made sense in the moment.",
                  "Splitting one solid entry into two thin ones to increase count.",
                  "Padding with surface mentions where no substantive intelligence was actually present.",
                ]}
              />
            </Section>
          </div>
        )}

        {/* Tests Tab */}
        {activeTab === "tests" && (
          <div>
            <Section title="Two Passing Tests" color={colors.gold}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: colors.textMuted,
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Every candidate entry must pass both. Failing either is
                sufficient reason to drop it.
              </p>

              <div
                style={{
                  backgroundColor: colors.bgCard,
                  border: `1px solid ${colors.border}`,
                  borderRadius: "4px",
                  padding: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                    color: colors.gold,
                    marginBottom: "0.5rem",
                  }}
                >
                  The Standalone Test
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: colors.text,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Would this entry be useful retrieved cold, with no other
                  context? If it requires the conversation to make sense, it
                  fails.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: colors.bgCard,
                  border: `1px solid ${colors.border}`,
                  borderRadius: "4px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                    color: colors.steel,
                    marginBottom: "0.5rem",
                  }}
                >
                  The Generalization Test
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: colors.text,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Does this connect to anything active beyond this specific
                  conversation? If it's purely situational with no living
                  relevance, it fails.
                </p>
              </div>
            </Section>
          </div>
        )}

        {/* Rationale Tab */}
        {activeTab === "rationale" && (
          <div>
            <Section title="Why Numbers Fail" color={colors.gold}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: colors.text,
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                Numerical targets create a perverse incentive: the AI
                optimizes for hitting the number rather than for quality of
                material.
              </p>
            </Section>
          </div>
        )}

        {/* Usage Tab */}
        {activeTab === "usage" && (
          <div>
            <Section title="Apply Wherever You'd Write a Count" color={colors.gold}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: colors.textMuted,
                  lineHeight: 1.6,
                }}
              >
                Any prompt instruction that says "aim for X–Y items" is a
                candidate for replacement.
              </p>
            </Section>
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            borderTop: `1px solid ${colors.border}`,
            paddingTop: "1rem",
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              color: colors.goldDim,
              letterSpacing: "0.1em",
            }}
          >
            ECOS · Prompt Engineering
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              color: colors.textMuted,
            }}
          >
            v1.0 · March 2026
          </span>
        </div>
      </div>
    </div>
  );
}
