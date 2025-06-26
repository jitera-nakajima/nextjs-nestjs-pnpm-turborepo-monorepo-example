
import React, { useState } from 'react';
import styles from '../styles/LanguageSkillForm.module.css';

const LanguageSkillForm: React.FC = () => {
  const [language, setLanguage] = useState('');
  const [convEnabled, setConvEnabled] = useState(false);
  const [writingEnabled, setWritingEnabled] = useState(false);
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!language) {
      setMessage('言語を選択してください');
      return;
    }
    if (!convEnabled && !writingEnabled) {
      setMessage('会話対応可否または文章対応可否を選択してください');
      return;
    }
    setMessage('登録が完了しました');
  };

  return (
    <div className={styles.container}>
      <h1>語学スキル入力・更新</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="language">言語 <span>*</span></label>
          <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)} required>
            <option value="">-- 言語を選択してください --</option>
            <option value="英語">英語</option>
            <option value="中国語">中国語</option>
            <option value="フランス語">フランス語</option>
            <option value="スペイン語">スペイン語</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>対応可否 <span>*</span></label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={convEnabled} onChange={() => setConvEnabled(!convEnabled)} />
              会話対応可
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={writingEnabled} onChange={() => setWritingEnabled(!writingEnabled)} />
              文章対応可
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="note">備考</label>
          <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} maxLength={200} placeholder="200文字以内で入力してください"></textarea>
        </div>
        <button type="submit" className={styles.btnSave}>保存</button>
        {message && <div className={styles.message}>{message}</div>}
      </form>
    </div>
  );
};

export default LanguageSkillForm;
