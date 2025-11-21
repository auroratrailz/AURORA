export default function FloatingWhatsApp({phone}:{phone:string}){
  const encodedMsg = encodeURIComponent("Hi Aurora Trails! I'm interested in a Wayanad trip. Can you help?");
  const href = `https://wa.me/${phone.replace(/\D/g,'')}?text=${encodedMsg}`;
  return (
    <a href={href} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
       style={{
         position:'fixed',right:18,bottom:18,background:'#25D366',
         color:'white',padding:14,borderRadius:999,boxShadow:'0 12px 40px rgba(2,10,12,0.2)',
         display:'flex',alignItems:'center',gap:8,zIndex:1000,textDecoration:'none'
       }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M..." fill="white"/></svg>
      <span style={{fontWeight:700}}>WhatsApp</span>
    </a>
  );
}