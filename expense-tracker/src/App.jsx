import { useState } from 'react'

const CATEGORIES = [
  { value: "Transportation", icon: "🚗", color: "#3B82F6" },
  { value: "Food", icon: "🍜", color: "#F59E0B" },
  { value: "Date", icon: "💕", color: "#EC4899" },
  { value: "Savings", icon: "💰", color: "#10B981" },
  { value: "Orders", icon: "📦", color: "#8B5CF6" },
  { value: "Others", icon: "✦", color: "#6B7280" },
];

const getCategoryMeta = (val) =>
  CATEGORIES.find((c) => c.value === val) || { icon: "✦", color: "#6B7280" };

function App() {
  const [expenseForm, setExpenseForm] = useState({
    expenseName: "", amount: "", category: "", date: "",
  });
  const [expenses, setExpenses] = useState([]);
  const [errors, setErrors] = useState({});
  const [animatingId, setAnimatingId] = useState(null);

  const validate = () => {
    const e = {};
    if (!expenseForm.expenseName.trim()) e.expenseName = "Required";
    if (!expenseForm.amount || isNaN(expenseForm.amount) || Number(expenseForm.amount) <= 0) e.amount = "Enter valid amount";
    if (!expenseForm.category) e.category = "Pick a category";
    if (!expenseForm.date) e.date = "Required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const id = crypto.randomUUID();
    setAnimatingId(id);
    setExpenses((prev) => [{ ...expenseForm, id }, ...prev]);
    setExpenseForm({ expenseName: "", amount: "", category: "", date: "" });
    setErrors({});
    setTimeout(() => setAnimatingId(null), 600);
  };

  const handleDelete = (id) => setExpenses((prev) => prev.filter((ex) => ex.id !== id));

  const total = expenses.reduce((sum, ex) => sum + Number(ex.amount), 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0A0A0F;
          --surface: #13131A;
          --surface2: #1C1C27;
          --border: rgba(255,255,255,0.07);
          --text: #F0EEF8;
          --muted: #6B6880;
          --accent: #C084FC;
          --accent2: #818CF8;
          --danger: #F87171;
          --radius: 16px;
        }

        body { background: var(--bg); color: var(--text); font-family: 'DM Mono', monospace; }

        .app-wrapper {
          min-height: 100vh;
          padding: 48px 24px;
          background: var(--bg);
          background-image:
            radial-gradient(ellipse 60% 40% at 20% 10%, rgba(192,132,252,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 80%, rgba(129,140,248,0.06) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        /* Header */
        .header { text-align: center; }
        .header-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .header h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #F0EEF8 30%, #C084FC 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Card */
        .card {
          width: 100%;
          max-width: 780px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
        }

        /* Form */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-grid .full { grid-column: 1 / -1; }

        .field { display: flex; flex-direction: column; gap: 6px; }
        .field label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .field input, .field select {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 14px;
          color: var(--text);
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
          -webkit-appearance: none;
          width: 100%;
        }
        .field input::placeholder { color: var(--muted); }
        .field input:focus, .field select:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(192,132,252,0.12);
        }
        .field.error input, .field.error select { border-color: var(--danger); }
        .field .err-msg { font-size: 10px; color: var(--danger); }
        .field input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.5); cursor: pointer; }

        /* Category pills */
        .cat-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .cat-pill {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface2);
          font-size: 12px;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.18s;
          font-family: 'DM Mono', monospace;
        }
        .cat-pill:hover { border-color: rgba(255,255,255,0.2); color: var(--text); }
        .cat-pill.active {
          color: var(--text);
          background: var(--surface);
          box-shadow: 0 0 0 1.5px var(--pill-color, var(--accent));
          border-color: transparent;
        }

        /* Submit button */
        .btn-submit {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #9333EA, #6366F1);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          margin-top: 4px;
        }
        .btn-submit:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-submit:active { transform: translateY(0); }

        /* Summary bar */
        .summary {
          width: 100%;
          max-width: 780px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .summary-label {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .summary-total {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: var(--accent);
        }

        /* Expense list */
        .expense-list {
          width: 100%;
          max-width: 780px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .expense-row {
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px 18px;
          transition: transform 0.18s, box-shadow 0.18s;
          animation: slideIn 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .expense-row:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          border-color: rgba(255,255,255,0.1);
        }
        .cat-dot {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }
        .expense-info { flex: 1; min-width: 0; }
        .expense-name {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .expense-meta {
          font-size: 11px;
          color: var(--muted);
          margin-top: 2px;
        }
        .expense-amount {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
        }
        .btn-del {
          background: none;
          border: 1px solid transparent;
          border-radius: 8px;
          color: var(--muted);
          cursor: pointer;
          font-size: 14px;
          padding: 4px 8px;
          transition: all 0.15s;
          flex-shrink: 0;
        }
        .btn-del:hover { border-color: var(--danger); color: var(--danger); background: rgba(248,113,113,0.08); }

        .empty {
          text-align: center;
          padding: 48px 0;
          color: var(--muted);
          font-size: 13px;
        }
        .empty-icon { font-size: 36px; margin-bottom: 12px; }

        @media (max-width: 500px) {
          .form-grid { grid-template-columns: 1fr; }
          .form-grid .full { grid-column: auto; }
        }
      `}</style>

      <div className="app-wrapper">
        {/* Header */}
        <div className="header">
          <p className="header-label">Personal Finance</p>
          <h1>Expense Tracker</h1>
        </div>

        {/* Form Card */}
        <div className="card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className={`field ${errors.expenseName ? 'error' : ''}`}>
                <label>Expense Name</label>
                <input
                  type="text" name="expenseName"
                  value={expenseForm.expenseName}
                  onChange={handleChange}
                  placeholder="e.g. Grab ride"
                />
                {errors.expenseName && <span className="err-msg">{errors.expenseName}</span>}
              </div>

              <div className={`field ${errors.amount ? 'error' : ''}`}>
                <label>Amount (₱)</label>
                <input
                  type="number" name="amount"
                  value={expenseForm.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  min="0" step="0.01"
                />
                {errors.amount && <span className="err-msg">{errors.amount}</span>}
              </div>

              <div className={`field full ${errors.category ? 'error' : ''}`}>
                <label>Category</label>
                <div className="cat-pills">
                  {CATEGORIES.map((cat) => (
                    <button
                      type="button"
                      key={cat.value}
                      className={`cat-pill ${expenseForm.category === cat.value ? 'active' : ''}`}
                      style={{ '--pill-color': cat.color }}
                      onClick={() => {
                        setExpenseForm((f) => ({ ...f, category: cat.value }));
                        if (errors.category) setErrors((e) => ({ ...e, category: undefined }));
                      }}
                    >
                      <span>{cat.icon}</span> {cat.value}
                    </button>
                  ))}
                </div>
                {errors.category && <span className="err-msg">{errors.category}</span>}
              </div>

              <div className={`field ${errors.date ? 'error' : ''}`}>
                <label>Date</label>
                <input
                  type="date" name="date"
                  value={expenseForm.date}
                  onChange={handleChange}
                />
                {errors.date && <span className="err-msg">{errors.date}</span>}
              </div>

              <div className="field" style={{ justifyContent: 'flex-end' }}>
                <label>&nbsp;</label>
                <button className="btn-submit" type="submit">+ Add Expense</button>
              </div>
            </div>
          </form>
        </div>

        {/* Summary */}
        {expenses.length > 0 && (
          <div className="summary">
            <span className="summary-label">{expenses.length} expense{expenses.length !== 1 ? 's' : ''}</span>
            <span className="summary-total">₱ {total.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
          </div>
        )}

        {/* Expense List */}
        <div className="expense-list">
          {expenses.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">📭</div>
              No expenses yet. Add one above!
            </div>
          ) : (
            expenses.map((ex) => {
              const meta = getCategoryMeta(ex.category);
              return (
                <div className="expense-row" key={ex.id}>
                  <div
                    className="cat-dot"
                    style={{ background: meta.color + '22', border: `1px solid ${meta.color}44` }}
                  >
                    {meta.icon}
                  </div>
                  <div className="expense-info">
                    <div className="expense-name">{ex.expenseName}</div>
                    <div className="expense-meta">
                      {ex.category} · {new Date(ex.date + 'T00:00:00').toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="expense-amount" style={{ color: meta.color }}>
                    ₱{Number(ex.amount).toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                  </div>
                  <button className="btn-del" onClick={() => handleDelete(ex.id)} title="Delete">✕</button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;