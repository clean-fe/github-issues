export default class Toast {
  static queue = [];
  static isShowing = false;
  static getToastTpl(message, status) {
    const color = status === 'success' ? 'bg-green-600' : 'bg-red-500';
    return `
      <div class="fixed bottom-16 left-0 right-0 z-50 flex justify-center items-center">
        <div class="rounded-md px-4 py-2 ${color} text-white shadow-lg min-w-[300px] text-center">
          ${message}
        </div>
      </div>
    `;
  }

  static success = (message, duration = 2000) => {
    const toast = {
      message,
      status: 'success',
      duration: duration,
    };
    this.queue.push(toast);
    if (!this.isShowing) {
      this.show();
    }
  }

  static error = (message, duration = 2000) => {
    const toast = {
      message,
      status: 'error',
      duration: duration,
    };
    this.queue.push(toast);
    if (!this.isShowing) {
      this.show();
    }
  }

  static show = () => {
    const { message, status, duration } = this.queue.shift();
    this.isShowing = true;
    const toast = document.createElement('div');
    toast.innerHTML = this.getToastTpl(message, status);
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('opacity-0');
      setTimeout(() => {
        toast.remove();
        this.isShowing = false;
        if (this.queue.length > 0) {
          this.show();
        }
      }, 500);
    }, duration);
  }
}
