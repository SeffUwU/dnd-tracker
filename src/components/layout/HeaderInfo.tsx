"use client";

import { getTranslation } from "@/helpers/translation/getTranslation.helper";

export function HeaderInfo() {
  const t = getTranslation();

  return (
    <div className="max-w-2xl p-2">
      <h3 className="pb-0">{t.sidebar.campaigns}</h3>
      <p>
        Your currently active campaigns that you're a part of are going to be
        displayed here .
      </p>
    </div>
  );
}
