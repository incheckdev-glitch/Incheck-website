export type IconName = 'check' | 'search' | 'alert' | 'shield' | 'thermo' | 'chart' | 'book' | 'spark' | 'report' | 'menu' | 'close' | 'arrow' | 'play' | 'pin' | 'clock' | 'layers' | 'camera' | 'users';

const paths: Record<IconName, React.ReactNode> = {
  check: <><path d="M6 12.5 10 16l8-9"/><rect x="3" y="3" width="18" height="18" rx="5"/></>,
  search: <><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/></>,
  alert: <><path d="M12 4 3.7 19h16.6L12 4Z"/><path d="M12 9v4M12 16.5h.01"/></>,
  shield: <><path d="M12 3 5 6v5c0 4.6 3 7.6 7 10 4-2.4 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></>,
  thermo: <><path d="M9 5a3 3 0 0 1 6 0v7.2a5 5 0 1 1-6 0V5Z"/><path d="M12 8v7"/></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
  book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23.5v-18ZM20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5a3.5 3.5 0 0 1 3.5 3.5v-18Z"/></>,
  spark: <><path d="m12 2 1.4 5.1L18 9l-4.6 1.9L12 16l-1.4-5.1L6 9l4.6-1.9L12 2Z"/><path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z"/></>,
  report: <><path d="M6 2h9l4 4v16H6z"/><path d="M15 2v5h5M9 12h6M9 16h6"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
  arrow: <path d="M5 12h14M14 7l5 5-5 5"/>,
  play: <><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></>,
  pin: <><path d="M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="10" r="2"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
  camera: <><path d="M4 7h4l2-3h4l2 3h4v12H4z"/><circle cx="12" cy="13" r="3"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2"/></>,
};

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
