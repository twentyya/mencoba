const P = '#00416b';
const A = '#fdd402';
const PL = '#e8f2f9';

const proximaNova = "'Proxima Nova', 'Nunito', 'Montserrat', 'Arial', sans-serif";

const MainBox = ({ title, items, style = {} }) => (
  <div style={{
    background: P,
    border: `2px solid ${P}`,
    borderRadius: 8,
    padding: '10px 14px',
    boxShadow: `0 2px 8px rgba(0,65,107,0.18)`,
    ...style,
  }}>
    <div style={{ fontWeight: 700, fontSize: 11.5, color: '#fff', lineHeight: 1.4, marginBottom: 6, fontFamily: proximaNova }}>{title}</div>
    {items.map((t, i) => (
      <div key={i} style={{ display: 'flex', gap: 6, marginTop: 4, fontSize: 10, color: '#cce4f4', lineHeight: 1.4, fontFamily: proximaNova }}>
        <span style={{ color: A, flexShrink: 0, fontWeight: 'bold', marginTop: 1 }}>▸</span>
        <span>{t}</span>
      </div>
    ))}
  </div>
);

const NeutralBox = ({ title, items, style = {} }) => (
  <div style={{
    background: PL,
    border: `1.5px solid ${P}33`,
    borderRadius: 8,
    padding: '10px 14px',
    boxShadow: `0 2px 8px rgba(0,65,107,0.08)`,
    ...style,
  }}>
    <div style={{ fontWeight: 700, fontSize: 11.5, color: P, lineHeight: 1.4, marginBottom: 6, fontFamily: proximaNova }}>{title}</div>
    {items.map((t, i) => (
      <div key={i} style={{ display: 'flex', gap: 6, marginTop: 4, fontSize: 10, color: '#2c4a5e', lineHeight: 1.4, fontFamily: proximaNova }}>
        <span style={{ color: P, flexShrink: 0, fontWeight: 'bold', marginTop: 1 }}>▸</span>
        <span>{t}</span>
      </div>
    ))}
  </div>
);

const ResultBox = ({ title, items, style = {} }) => (
  <div style={{
    background: A,
    borderRadius: 8,
    padding: '10px 14px',
    boxShadow: `0 4px 14px rgba(0,65,107,0.22)`,
    ...style,
  }}>
    <div style={{ fontWeight: 700, fontSize: 11.5, color: P, lineHeight: 1.4, marginBottom: 6, fontFamily: proximaNova }}>{title}</div>
    {items.map((t, i) => (
      <div key={i} style={{ display: 'flex', gap: 6, marginTop: 4, fontSize: 10, color: P, lineHeight: 1.4, fontFamily: proximaNova }}>
        <span style={{ color: P, flexShrink: 0, fontWeight: 'bold', marginTop: 1 }}>▸</span>
        <span>{t}</span>
      </div>
    ))}
  </div>
);

const HArrow = ({ label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: 48, gap: 3 }}>
    {label && (
      <div style={{
        fontSize: 8.5, color: P, fontStyle: 'italic', textAlign: 'center',
        lineHeight: 1.3, maxWidth: 60, fontFamily: proximaNova,
      }}>
        {label}
      </div>
    )}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: 24, height: 2, background: P }} />
      <div style={{ borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: `8px solid ${P}` }} />
    </div>
  </div>
);

const StageChip = ({ label }) => (
  <div style={{
    fontSize: 8.5, fontWeight: 700, color: P, background: `${A}cc`,
    display: 'inline-block', padding: '2px 8px', borderRadius: 4,
    marginBottom: 6, fontFamily: proximaNova, letterSpacing: 0.3,
  }}>
    {label}
  </div>
);

const SideNote = ({ title, children, style = {} }) => (
  <div style={{
    background: '#fffef5',
    border: `1.5px solid ${A}99`,
    borderRadius: 8, padding: '8px 10px',
    fontSize: 9.5, lineHeight: 1.5,
    fontFamily: proximaNova,
    ...style,
  }}>
    {title && <div style={{ fontWeight: 700, color: P, fontSize: 10, marginBottom: 4, fontFamily: proximaNova }}>{title}</div>}
    <div style={{ color: '#444' }}>{children}</div>
  </div>
);

const IFMNote = () => (
  <div style={{
    background: `${PL}cc`,
    border: `1.5px solid ${P}44`,
    borderRadius: 8, padding: '10px 12px',
    fontSize: 9.5, color: P, lineHeight: 1.5,
    fontFamily: proximaNova, minWidth: 160, maxWidth: 180,
  }}>
    <div style={{ fontWeight: 700, fontSize: 10, marginBottom: 6, fontFamily: proximaNova }}>⚙ Kerangka IFM</div>

    <div style={{ fontWeight: 700, color: P, marginBottom: 2, fontSize: 9, fontFamily: proximaNova }}>Tahap 1</div>
    <div style={{ color: '#3a5e77', marginBottom: 8, fontSize: 9, fontFamily: proximaNova }}>
      Parameter θ̂_X dan θ̂_Y diestimasi secara <em>univariat</em> via MLE.
    </div>

    <div style={{ fontWeight: 700, color: P, marginBottom: 2, fontSize: 9, fontFamily: proximaNova }}>Tahap 2</div>
    <div style={{ color: '#3a5e77', marginBottom: 8, fontSize: 9, fontFamily: proximaNova }}>
      Parameter copula θ̂_C diestimasi dari pseudo-observations Tahap 1.
    </div>

    <div style={{ fontStyle: 'italic', fontSize: 8.5, color: '#666', borderTop: `1px solid ${P}22`, paddingTop: 6, fontFamily: proximaNova }}>
      Dua tahap ini menghindari optimisasi simultan yang lebih kompleks.
    </div>
  </div>
);

export default function AlurMetodologi() {
  return (
    <div style={{
      fontFamily: proximaNova,
      background: '#f0f4f8',
      padding: '20px 24px',
      minHeight: '100vh',
    }}>
      {/* Proxima Nova font import via Google Fonts alternative */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      {/* TITLE */}
      <div style={{
        background: P, color: '#fff', textAlign: 'center',
        padding: '10px 24px', fontSize: 14, fontWeight: 700,
        letterSpacing: 0.5, borderRadius: 8, marginBottom: 20,
        fontFamily: proximaNova, boxShadow: `0 4px 16px rgba(0,65,107,0.28)`,
        borderBottom: `4px solid ${A}`,
      }}>
        Alur Metodologi Penelitian
      </div>

      {/* HORIZONTAL FLOW CONTAINER */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 0,
        overflowX: 'auto',
        paddingBottom: 8,
      }}>

        {/* STAGE 1: DATA INPUT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0, width: 180 }}>
          <div style={{ textAlign: 'center', fontSize: 8.5, fontWeight: 700, color: P, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4, fontFamily: proximaNova }}>
            ── DATA ──
          </div>
          <MainBox
            title="Data Biaya Klaim Bivariat Semikontinu (X, Y)"
            items={[
              'Massa probabilitas signifikan pada nilai nol',
              'Distribusi kontinu ekor kanan tebal (positif)',
            ]}
          />
        </div>

        <HArrow label="identifikasi kategori" />

        {/* STAGE 2: PEMISAHAN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0, width: 185 }}>
          <div style={{ textAlign: 'center', fontSize: 8.5, fontWeight: 700, color: '#999', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4, fontFamily: proximaNova }}>
            ── PEMISAHAN ──
          </div>
          <MainBox
            title="Pemisahan Ruang Sampel"
            items={[
              'Empat kategori saling lepas: (0,0), (X,0), (0,Y), (X,Y)',
              'Fokus analisis: D⁺ = {X > 0, Y > 0} → n₁₁ observasi',
            ]}
          />
          <SideNote title="💡 Hurdle Model">
            Justifikasi konseptual pemisahan — analisis dibatasi pada D⁺ dengan n₁₁ observasi.
          </SideNote>
        </div>

        <HArrow label="filter X>0, Y>0" />

        {/* STAGE 3: IFM WRAPPER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flexShrink: 0, width: 370 }}>
          <div style={{
            border: `2px dashed ${A}`,
            borderRadius: 10,
            padding: '12px 10px 10px',
            background: `rgba(253,212,2,0.03)`,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -11, left: 12,
              background: A, color: P,
              fontSize: 8.5, fontWeight: 700,
              padding: '2px 10px', borderRadius: 4,
              letterSpacing: 0.3, fontFamily: proximaNova,
            }}>
              INFERENCE FUNCTIONS FOR MARGINS (IFM)
            </div>

            {/* Inner horizontal layout: Tahap 1 → arrow → PseudoObs → arrow → Tahap 2 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 0, marginTop: 4 }}>

              {/* TAHAP 1 */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <StageChip label="TAHAP 1 — Estimasi Marginal" />
                <MainBox
                  title="Estimasi Distribusi Marginal"
                  items={[
                    'Kandidat: Gamma, Lognormal, Weibull',
                    'Estimasi θ̂_X dan θ̂_Y via MLE',
                    'Seleksi terbaik: AIC/BIC minimum',
                  ]}
                  style={{ minWidth: 0 }}
                />
              </div>

              <HArrow label="PIT" />

              {/* PSEUDO-OBS */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <NeutralBox
                  title="Pseudo-Observations"
                  items={[
                    'U = F̂_X(X), V = F̂_Y(Y)',
                    'Himpunan [0,1]²',
                    'Invarian Kendall\'s tau',
                  ]}
                  style={{ minWidth: 0 }}
                />
              </div>

              <HArrow label="copula fit" />

              {/* TAHAP 2 */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <StageChip label="TAHAP 2 — Estimasi Copula" />
                <MainBox
                  title="Estimasi Copula Archimedean"
                  items={[
                    'Kendall\'s tau empiris',
                    'Kandidat: Clayton, Gumbel, Frank',
                    'Estimasi θ̂_C via MLE',
                  ]}
                  style={{ minWidth: 0 }}
                />
              </div>

            </div>
          </div>

          {/* IFM Note below the wrapper */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
            <IFMNote />
          </div>
        </div>

        <HArrow />

        {/* STAGE 4: SELEKSI */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0, width: 180 }}>
          <div style={{ textAlign: 'center', fontSize: 8.5, fontWeight: 700, color: P, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4, fontFamily: proximaNova }}>
            ── EVALUASI ──
          </div>
          <MainBox
            title="Seleksi & Evaluasi Model Copula"
            items={[
              'AIC/BIC: identifikasi copula terbaik',
              'LRT: uji signifikansi dependensi (H₀: independensi)',
            ]}
          />
        </div>

        <HArrow label="inferensi populasi" />

        {/* STAGE 5: HASIL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0, width: 190 }}>
          <div style={{ textAlign: 'center', fontSize: 8.5, fontWeight: 700, color: P, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4, fontFamily: proximaNova }}>
            ── POPULASI (RISIKO) ──
          </div>
          <ResultBox
            title="Copula Terpilih: Struktur Dependensi Risiko X & Y"
            items={[
              'Karakterisasi pola: ekor bawah (Clayton), atas (Gumbel), simetris (Frank)',
              'Evaluasi kelayakan asumsi independensi risiko gabungan',
            ]}
          />
          <SideNote style={{ fontStyle: 'italic' }}>
            Menarik kesimpulan mengenai{' '}
            <strong style={{ color: P }}>populasi</strong> — struktur dependensi antara{' '}
            <strong>risiko X</strong> dan <strong>risiko Y</strong>.
          </SideNote>
        </div>

      </div>
    </div>
  );
}
