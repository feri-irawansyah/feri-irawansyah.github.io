import { writable } from "svelte/store";

export const modals = writable({});

export const openModal = (/** @type {any} */ id) => {
  modals.update((prev) => ({ ...prev, [id]: { show: true } }));
};

export const closeModal = (/** @type {any} */ id) => {
  modals.update((prev) => ({ ...prev, [id]: { show: false } }));
};

/**
 * @param {any} errorFields
 */
export function BadRequest(errorFields) {
  const formattedErrors = Object.entries(errorFields ?? {}).flatMap(
    ([field, fieldErrors]) =>
      fieldErrors.map(errObj => ({
        field,
        error: typeof errObj === "string"
          ? errObj
          : errObj.message ?? String(errObj),
      }))
  );
  return formattedErrors[0] ? formattedErrors[0] : { field: "unknown", error: "Unknown error" };
}

export function formatWIBDate(dateString) {
    const date = new Date(dateString);

    // Offset ke WIB (UTC+7)
    const wibOffset = 7 * 60; // dalam menit
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const wibDate = new Date(utc + (wibOffset * 60000));

    // Format jam dan menit
    const hours = wibDate.getHours();
    const minutes = wibDate.getMinutes().toString().padStart(2, '0');
    const isPM = hours >= 12;
    const hour12 = ((hours + 11) % 12 + 1);

    // Format hari dan tanggal
    const day = wibDate.toLocaleDateString('en-US', { weekday: 'short' });
    const month = wibDate.toLocaleDateString('en-US', { month: 'short' });
    const dayNumber = wibDate.getDate();
    const year = wibDate.getFullYear();

    return `${hour12}:${minutes} ${isPM ? 'PM' : 'AM'} WIB, ${day} ${month} ${dayNumber}, ${year}`;
}