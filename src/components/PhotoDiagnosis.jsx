import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, ImagePlus, Phone, Trash2, TriangleAlert } from 'lucide-react'
import { useCursorGlow } from '../lib/motion.jsx'
import { business, diagnosis } from '../data/site.js'
import './PhotoDiagnosis.css'

const MAX_BYTES = 8 * 1024 * 1024
const ACCEPT = 'image/png,image/jpeg,image/webp,image/heic,image/heif'

/**
 * The signature element: a hard-edged intake console that sits half-out of the
 * hero colour block and breaks the plane between the two fields.
 *
 * No backend. Local preview via URL.createObjectURL (revoked on replace and on
 * unmount), real type/size validation, a labelled reading beat, and a success
 * state that reads as a confirmation rather than a green tick.
 */
export default function PhotoDiagnosis() {
  const uid = useId()
  const inputRef = useRef(null)
  const urlRef = useRef(null)
  const timerRef = useRef(null)

  const [expanded, setExpanded] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle') // idle | working | done
  const [form, setForm] = useState({ description: '', name: '', phone: '' })

  const glow = useCursorGlow()

  const releasePreview = useCallback(() => {
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current)
      urlRef.current = null
    }
  }, [])

  useEffect(
    () => () => {
      releasePreview()
      if (timerRef.current) clearTimeout(timerRef.current)
    },
    [releasePreview]
  )

  const acceptFile = useCallback(
    (next) => {
      if (!next) return
      if (!next.type.startsWith('image/')) {
        setError(diagnosis.errors.type)
        return
      }
      if (next.size > MAX_BYTES) {
        setError(diagnosis.errors.size)
        return
      }
      releasePreview()
      const url = URL.createObjectURL(next)
      urlRef.current = url
      setPreview(url)
      setFile(next)
      setError(null)
      setExpanded(true)
    },
    [releasePreview]
  )

  const onDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    acceptFile(e.dataTransfer.files?.[0])
  }

  const removePhoto = () => {
    releasePreview()
    setPreview(null)
    setFile(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!file) {
      setError(diagnosis.errors.missingPhoto)
      return
    }
    if (!form.name.trim()) {
      setError(diagnosis.errors.missingName)
      return
    }
    if (!form.phone.trim()) {
      setError(diagnosis.errors.missingPhone)
      return
    }
    setError(null)
    setStatus('working')
    timerRef.current = setTimeout(() => setStatus('done'), 1500)
  }

  const reset = () => {
    removePhoto()
    setForm({ description: '', name: '', phone: '' })
    setStatus('idle')
    setError(null)
  }

  const sizeLabel = file
    ? file.size >= 1024 * 1024
      ? `${(file.size / 1024 / 1024).toFixed(1)} MB`
      : `${Math.max(1, Math.round(file.size / 1024))} KB`
    : null

  return (
    <div
      className="pdx"
      data-expanded={expanded ? 'true' : 'false'}
      data-status={status}
      ref={glow.ref}
      onPointerMove={glow.onPointerMove}
      onPointerEnter={glow.onPointerEnter}
      onPointerLeave={glow.onPointerLeave}
    >
      <span className="pdx__glow" aria-hidden="true" />
      <span className="pdx__plane" aria-hidden="true" />

      <div className="pdx__head">
        <span className="label pdx__eyebrow">
          <span className="label__tick" aria-hidden="true" />
          {diagnosis.eyebrow}
        </span>
        <h2 className="pdx__title" id={`${uid}-title`}>
          {diagnosis.heading}
        </h2>
        <p className="pdx__intro">{diagnosis.intro}</p>
      </div>

      {status === 'done' ? (
        <div className="pdx__done">
          <span className="pdx__done-mark" aria-hidden="true">
            <CheckCircle2 size={22} strokeWidth={2} />
          </span>
          <h3 className="pdx__done-title">{diagnosis.success.title}</h3>
          <p className="pdx__done-body">{diagnosis.success.body}</p>
          <div className="pdx__done-actions">
            <a className="btn btn--ink" href={business.phoneHref}>
              <span className="btn__wipe" aria-hidden="true" />
              <span className="btn__inner">
                <Phone className="btn__icon" size={16} strokeWidth={2.4} aria-hidden="true" />
                {business.phoneDisplay}
              </span>
            </a>
            <button type="button" className="pdx__restart" onClick={reset}>
              {diagnosis.success.reset}
            </button>
          </div>
          <p className="pdx__note">{diagnosis.success.note}</p>
        </div>
      ) : (
        <form className="pdx__form" onSubmit={onSubmit} noValidate>
          {/* --- drop target -------------------------------------- */}
          <div className="pdx__field pdx__field--drop">
            <label className="pdx__label" htmlFor={`${uid}-photo`}>
              {diagnosis.fields.photo}
            </label>

            <div
              className="pdx__drop"
              data-dragging={dragging ? 'true' : 'false'}
              data-filled={preview ? 'true' : 'false'}
              onDragOver={(e) => {
                e.preventDefault()
                setDragging(true)
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
            >
              {preview ? (
                <div className="pdx__preview">
                  <span className="pdx__thumb">
                    <img src={preview} alt="" />
                  </span>
                  <span className="pdx__meta">
                    <span className="pdx__filename">{file?.name}</span>
                    <span className="pdx__filesize">{sizeLabel} — ready to send</span>
                  </span>
                  <span className="pdx__preview-actions">
                    <button
                      type="button"
                      className="pdx__mini"
                      onClick={() => inputRef.current?.click()}
                    >
                      {diagnosis.replaceLabel}
                    </button>
                    <button
                      type="button"
                      className="pdx__mini pdx__mini--warn"
                      onClick={removePhoto}
                    >
                      <Trash2 size={13} strokeWidth={2.2} aria-hidden="true" />
                      <span className="sr-only">{diagnosis.removeLabel}</span>
                    </button>
                  </span>
                </div>
              ) : (
                <button
                  type="button"
                  className="pdx__drop-cta"
                  onClick={() => inputRef.current?.click()}
                >
                  <span className="pdx__drop-icon" aria-hidden="true">
                    <ImagePlus size={20} strokeWidth={1.9} />
                  </span>
                  <span className="pdx__drop-text">
                    <span className="pdx__drop-title">{diagnosis.dropTitle}</span>
                    <span className="pdx__drop-hint">{diagnosis.dropHint}</span>
                  </span>
                </button>
              )}

              <input
                ref={inputRef}
                id={`${uid}-photo`}
                className="sr-only"
                type="file"
                accept={ACCEPT}
                onChange={(e) => acceptFile(e.target.files?.[0])}
              />
            </div>
          </div>

          {/* --- mobile expand affordance ------------------------- */}
          <button
            type="button"
            className="btn btn--wide pdx__open"
            onClick={() => setExpanded(true)}
          >
            <span className="btn__wipe" aria-hidden="true" />
            <span className="btn__inner">
              {diagnosis.openLabel}
              <ArrowRight className="btn__icon" size={16} strokeWidth={2.4} aria-hidden="true" />
            </span>
          </button>

          {/* --- the rest of the console -------------------------- */}
          <div className="pdx__rest">
            <div className="pdx__field">
              <label className="pdx__label" htmlFor={`${uid}-desc`}>
                {diagnosis.fields.description}
              </label>
              <textarea
                id={`${uid}-desc`}
                className="pdx__input pdx__input--area"
                rows={2}
                value={form.description}
                placeholder={diagnosis.fields.descriptionHint}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>

            <div className="pdx__row">
              <div className="pdx__field">
                <label className="pdx__label" htmlFor={`${uid}-name`}>
                  {diagnosis.fields.name}
                </label>
                <input
                  id={`${uid}-name`}
                  className="pdx__input"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="pdx__field">
                <label className="pdx__label" htmlFor={`${uid}-phone`}>
                  {diagnosis.fields.phone}
                </label>
                <input
                  id={`${uid}-phone`}
                  className="pdx__input"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                />
              </div>
            </div>

            <button type="submit" className="btn btn--wide pdx__submit" disabled={status === 'working'}>
              <span className="btn__wipe" aria-hidden="true" />
              <span className="btn__inner">
                {status === 'working' ? diagnosis.workingLabel : diagnosis.submitLabel}
                {status === 'working' ? null : (
                  <ArrowRight className="btn__icon" size={16} strokeWidth={2.4} aria-hidden="true" />
                )}
              </span>
            </button>

            {status === 'working' ? (
              <p className="pdx__progress">
                <span className="pdx__progress-track" aria-hidden="true">
                  <span className="pdx__progress-fill" />
                </span>
              </p>
            ) : null}
          </div>

          <p className="pdx__reassure">{diagnosis.reassurance}</p>
        </form>
      )}

      {/* Everything the console knows is announced here; only errors also get a
          visible line, since every other state is already shown in the UI. */}
      <p className="sr-only" role="status" aria-live="polite">
        {error
          ? error
          : status === 'working'
            ? `${diagnosis.workingLabel}…`
            : status === 'done'
              ? `${diagnosis.success.title}. ${diagnosis.success.body}`
              : file
                ? `${file.name} attached, ${sizeLabel}.`
                : ''}
      </p>

      {error ? (
        <p className="pdx__status">
          <span className="pdx__error">
            <TriangleAlert size={14} strokeWidth={2.2} aria-hidden="true" />
            {error}
          </span>
        </p>
      ) : null}
    </div>
  )
}
