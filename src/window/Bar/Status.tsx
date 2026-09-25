import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import AstalWp from "gi://AstalWp"
import { createBinding } from "ags"

export default function Status() {
  const time = createPoll("", 1000, "date +'%a %b %e   %H:%M'")
  const { defaultSpeaker: speaker } = AstalWp.get_default()!
  const volume = createBinding(speaker, "volume")

  return (
    <box>
      <label label={volume.as((v) => `${Math.round(v * 100)}%`)} />
      <menubutton $type="end" halign={Gtk.Align.CENTER}>
        <label label={time} />
        <popover>
          <Gtk.Calendar />
        </popover>
      </menubutton>
    </box>
  )
}
