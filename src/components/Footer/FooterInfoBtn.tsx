function FooterInfoBtn({ btnName }: { btnName: string }) {
  return (
    <li>
      <button className="h-8 w-28">{btnName}</button>
    </li>
  );
}

export default FooterInfoBtn;
