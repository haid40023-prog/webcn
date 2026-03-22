"use client";

import { useEffect, useMemo, useState } from "react";
import { feeProviders, type FeeProvider, type FeeServiceType } from "@/data/feeProviders";
import { calculateFeeRange } from "@/lib/feeCalculator";
import { formatVnd } from "@/lib/formatVnd";
import { site } from "@/data/site";

type FeeRangeResult = ReturnType<typeof calculateFeeRange>;

function parseAmountVnd(text: string): number | null {
  const digits = text.replace(/[^\d]/g, "");
  if (!digits) return null;
  const n = Number(digits);
  if (!Number.isFinite(n)) return null;
  if (n <= 0) return null;
  // Giới hạn để tránh nhập cực lớn gây lag UI.
  if (n > 1_000_000_000_000) return null;
  return n;
}

export function FeeCalculator(props: { initialType?: FeeServiceType }) {
  const initialType = props.initialType;

  const availableTypes = useMemo(() => {
    const types = feeProviders
      .filter((p) => p.active)
      .map((p) => p.type);
    return Array.from(new Set(types));
  }, []);

  const [serviceType, setServiceType] = useState<FeeServiceType>(() => {
    const firstActiveType = availableTypes[0];
    return initialType && availableTypes.includes(initialType) ? initialType : firstActiveType;
  });

  const providersForType = useMemo(() => {
    return feeProviders.filter((p) => p.type === serviceType && p.active);
  }, [serviceType]);

  const [providerName, setProviderName] = useState<string>("");
  const selectedProvider: FeeProvider | undefined = useMemo(() => {
    return feeProviders.find((p) => p.name === providerName && p.type === serviceType);
  }, [providerName, serviceType]);

  useEffect(() => {
    if (providersForType.length === 0) {
      setProviderName("");
      return;
    }
    // Chn provider đầu tiên active cho type hiện tại.
    setProviderName((prev) => {
      const exists = providersForType.some((p) => p.name === prev);
      return exists ? prev : providersForType[0].name;
    });
  }, [serviceType, providersForType]);

  const [amountText, setAmountText] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<FeeRangeResult | null>(null);

  function handleCalculate() {
    const amountVnd = parseAmountVnd(amountText);
    if (!amountVnd) {
      setError("Vui lòng nhập số tiền hợp lệ (VNĐ), lớn hơn 0.");
      setResult(null);
      return;
    }
    if (!selectedProvider) {
      setError("Vui lòng chọn đơn vị hợp lệ.");
      setResult(null);
      return;
    }

    setError("");
    setResult(
      calculateFeeRange({
        amountVnd,
        feeMinPercent: selectedProvider.feeMin,
        feeMaxPercent: selectedProvider.feeMax,
      })
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">Công cụ tính phí tham khảo</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Phí hiển thị là mức tham khảo. Vui lòng liên hệ để được báo mức chính xác theo thời điểm.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Loại dịch vụ</label>
          <select
            value={serviceType}
            onChange={(e) => {
              setServiceType(e.target.value as FeeServiceType);
              setResult(null);
              setError("");
            }}
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30"
          >
            {availableTypes.map((t) => (
              <option key={t} value={t}>
                {t === "vi-tra-sau" ? "Ví trả sau" : "Thẻ tín dụng"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Đơn vị</label>
          <select
            value={providerName}
            onChange={(e) => {
              setProviderName(e.target.value);
              setResult(null);
              setError("");
            }}
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30"
            disabled={providersForType.length === 0}
          >
            {providersForType.length === 0 ? (
              <option value="">Chưa có đơn vị</option>
            ) : (
              providersForType.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-semibold">Số tin cần rút (VN)</label>
          <input
            value={amountText}
            onChange={(e) => {
              const next = e.target.value;
              // Chỉ giữ lại chữ số để "không cho nhập ký tự sai".
              setAmountText(next.replace(/[^\d]/g, ""));
              setResult(null);
              setError("");
            }}
            placeholder="Ví dụ: 10000000"
            inputMode="numeric"
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="button"
            onClick={handleCalculate}
            className="h-11 w-full rounded-xl bg-emerald-600 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Tính phí tham khảo
          </button>
          {error ? <div className="mt-2 text-sm text-red-600">{error}</div> : null}
        </div>
      </div>

      {result && selectedProvider ? (
        <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-emerald-900">
                Mức phí tham khảo: {result.feeMinPercent}% - {result.feeMaxPercent}%
              </div>
              <div className="mt-1 text-sm text-emerald-900">
                {`Đơn vị: ${selectedProvider.name}`}
              </div>
            </div>
            <div className="text-right text-xs text-emerald-800">
              * Mức phí hiển thị theo khoảng tham khảo
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-white p-3">
              <div className="text-xs font-semibold text-zinc-600">Phí dự kiến</div>
              <div className="mt-1 text-lg font-bold text-zinc-900">
                {formatVnd(result.feeLow)} - {formatVnd(result.feeHigh)}
              </div>
            </div>
            <div className="rounded-xl bg-white p-3">
              <div className="text-xs font-semibold text-zinc-600">
                Số tiền nhận về:
              </div>
              <div className="mt-1 text-lg font-bold text-zinc-900">
                {formatVnd(result.receivedLow)} - {formatVnd(result.receivedHigh)}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-zinc-600">
              Phí hiển thị là mức tham khảo. Vui lòng liên hệ để được báo mức chính xác theo thời điểm.
            </div>
            <div className="flex gap-3">
              <a
                href={site.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Nhận báo phí qua Zalo
              </a>
              <a
                href={`/lien-he`}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-black/[0.03]"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


