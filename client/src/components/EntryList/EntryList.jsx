import Entry from "@/components/Entry/Entry";
import styles from "./EntryList.module.scss";

function EntryList(props) {
  const { entries } = props;
  return (
    <section className={styles.entries}>
      <div className="container">
        <div className={styles.entriesGrid}>
          {entries.map((entry) => (
            <Entry key={entry.id} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default EntryList;
